$items = Get-ChildItem scratch\backup_images\*.webp | ForEach-Object {
    $name = $_.Name
    $newFile = "assets\images\$name"
    if (Test-Path $newFile) {
        $newLen = (Get-Item $newFile).Length
        $origLen = $_.Length
        if ($origLen -gt $newLen) {
            [PSCustomObject]@{
                File = $name
                Original_KiB = [math]::Round($origLen / 1024, 1)
                Optimized_KiB = [math]::Round($newLen / 1024, 1)
                Saved_KiB = [math]::Round(($origLen - $newLen) / 1024, 1)
                Pct_Saved = "$([math]::Round((1 - ($newLen / $origLen)) * 100, 1))%"
            }
        }
    }
}
$items | Format-Table -AutoSize
$totalSaved = ($items | Measure-Object -Property Saved_KiB -Sum).Sum
Write-Host "TOTAL IMAGE SAVINGS: $totalSaved KiB"
