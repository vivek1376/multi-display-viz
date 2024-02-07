#!/usr/bin/env bash

schema='https://vega.github.io/schema/vega-lite/v5.json'

src_specfile='test.combined.json'
base_specfile=$(jq 'del(.views)' $src_specfile)

cnt=1
len_views=$(jq '.views | length' $src_specfile)

outfile_vlspec='./static/js/data/outfile_vlspec.js'
echo "len: $len_views"



echo -e 'export var arr_VLspec=[\n' > $outfile_vlspec

for ((cnt=0; cnt<len_views; cnt++))
do
  # jq 'del(.views) + .views[0]' $src_specfile)
  jq "del(.views) + .views[$cnt]" $src_specfile >> $outfile_vlspec
  echo -e ',\n' >> $outfile_vlspec
  echo -e "\n\n\n\n"
  # cnt=$((cnt+1))
done

echo -e ']' >> $outfile_vlspec