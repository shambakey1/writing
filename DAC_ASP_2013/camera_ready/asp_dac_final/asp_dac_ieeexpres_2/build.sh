#!/bin/bash  
function build_ieee_pdf() {
FILE=$1
latex ${FILE}.tex
bibtex ${FILE}
latex ${FILE}.tex
latex ${FILE}.tex # -> *.dvi
dvips -Ppdf -G0 -tletter ${FILE}.dvi # -> *.ps
ps2pdf -dCompatibilityLevel=1.4 \
-dPDFSETTINGS=/prepress \
${FILE}.ps ${FILE}.pdf # -> *.pdf
}

build_ieee_pdf dac_asp_13-BR-2
