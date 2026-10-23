$dwebp = "scratch\libwebp-1.4.0-windows-x64\bin\dwebp.exe"
$cwebp = "scratch\libwebp-1.4.0-windows-x64\bin\cwebp.exe"
$backupDir = "scratch\backup_images"
$outDir = "assets\images"
$tempDir = "scratch\temp_png"

New-Item -ItemType Directory -Force -Path $tempDir | Out-Null

function ResizeAndCompress($srcName, $targetName, $w, $h, $q) {
    $src = Join-Path $backupDir $srcName
    $tmpPng = Join-Path $tempDir "$targetName.png"
    $outWebp = Join-Path $outDir "$targetName.webp"
    
    & $dwebp $src -resize $w $h -o $tmpPng | Out-Null
    & $cwebp -q $q -m 6 $tmpPng -o $outWebp | Out-Null
    
    $origSize = (Get-Item $src).Length
    $newSize = (Get-Item $outWebp).Length
    $pct = [math]::Round((1 - ($newSize / $origSize)) * 100, 1)
    Write-Host "$targetName.webp ($w x $h): $origSize bytes -> $newSize bytes ($pct% saved)"
}

Write-Host "--- Optimizing Logo ---"
# Logo displayed at 48x48 (desktop) / 40x40 (mobile). 96x96 is 2x retina.
ResizeAndCompress "logo.webp" "logo" 96 96 85

Write-Host "--- Optimizing Hero (LCP) ---"
# Hero displayed at 386x515 (mobile) / 500x625 (desktop)
# 400w: 400x533 (mobile 1x)
ResizeAndCompress "hampers-idul-fitri.webp" "hampers-idul-fitri-400" 400 533 78
# 600w: 600x800 (mobile 1.5x / desktop)
ResizeAndCompress "hampers-idul-fitri.webp" "hampers-idul-fitri-600" 600 800 78
# Default fallback: 500x667
ResizeAndCompress "hampers-idul-fitri.webp" "hampers-idul-fitri" 500 667 78

Write-Host "--- Optimizing Catalog Cards ---"
$cards = @(
    "sajadah.webp",
    "hampers-hijau-emas.webp",
    "kastengel.webp",
    "hampers-sage.webp"
)

foreach ($c in $cards) {
    $base = [System.IO.Path]::GetFileNameWithoutExtension($c)
    ResizeAndCompress $c "$base-400" 400 533 78
    ResizeAndCompress $c "$base-600" 600 800 78
    ResizeAndCompress $c $base 450 600 78
}

Write-Host "--- Optimizing Gallery & Blog Images on index.html ---"
# Gallery square items: displayed 300x300
ResizeAndCompress "hampers-perusahaan.webp" "hampers-perusahaan" 450 450 78
ResizeAndCompress "hampers-rotan.webp" "hampers-rotan" 450 450 78
ResizeAndCompress "tasbih.webp" "tasbih" 450 450 78

# Blog landscape cards: displayed 400x267 (3:2)
ResizeAndCompress "hampers-paket.webp" "hampers-paket" 450 300 78
ResizeAndCompress "hampers-artikel.webp" "hampers-artikel" 450 300 78
ResizeAndCompress "hampers-nastar.webp" "hampers-nastar" 450 300 78

Remove-Item -Recurse -Force $tempDir
Write-Host "Done optimization!"
