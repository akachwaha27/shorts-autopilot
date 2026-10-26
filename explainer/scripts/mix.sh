#!/usr/bin/env bash
# Mux the rendered video with the voiceover and the effects (effects ducked under the voice).
# usage: scripts/mix.sh video.mp4 voice.mp3 effects_vo.wav out.mp4
set -e
V=$1; VO=$2; FX=$3; OUT=$4
DUR=$(ffprobe -v error -show_entries format=duration -of default=nw=1:nk=1 "$V")
ffmpeg -y -loglevel error -i "$VO" -af "apad=whole_dur=$DUR" -ar 48000 /tmp/_voice_pad.wav
ffmpeg -y -loglevel error -i "$V" -i /tmp/_voice_pad.wav -i "$FX" -filter_complex \
 "[1:a]loudnorm=I=-17:TP=-2,aresample=48000,asplit=2[v1][v2];[2:a]loudnorm=I=-26:TP=-4:LRA=20,aresample=48000[fx0];[fx0][v1]sidechaincompress=threshold=0.05:ratio=3:attack=10:release=250[fx];[v2][fx]amix=inputs=2:normalize=0:duration=longest,loudnorm=I=-16:TP=-1.5:LRA=11,aresample=48000[a]" \
 -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 160k "$OUT"
# loudnorm runs at 192 kHz; without the aresample steps the sidechain/amix chain ended ~3 s early and cut off the
# last sentence of the voiceover (every video up to Oct 26). Refuse to hand over a mix whose audio is short.
AD=$(ffprobe -v error -select_streams a -show_entries stream=duration -of default=nw=1:nk=1 "$OUT")
python3 -c "import sys; a,v=float('$AD'),float('$DUR'); sys.exit(0 if a >= v - 0.3 else f'audio {a:.2f}s is shorter than video {v:.2f}s: voiceover would be cut off')"
echo "wrote $OUT (video ${DUR}s, audio ${AD}s)"
# No voiceover? Use the full effects mix instead:
#   ffmpeg -y -i video.mp4 -i effects_full.wav -filter_complex "[1:a]loudnorm=I=-18:TP=-1.5[a]" -map 0:v -map "[a]" -c:v copy -c:a aac out.mp4
