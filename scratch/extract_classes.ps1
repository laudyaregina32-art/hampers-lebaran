$classes = @{}
Get-ChildItem -Path . -Filter *.html | ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName)
    $matches = [regex]::Matches($content, 'class="([^"]+)"')
    foreach ($m in $matches) {
        $parts = $m.Groups[1].Value -split '\s+'
        foreach ($p in $parts) {
            if ($p.Trim()) {
                $classes[$p.Trim()] = $true
            }
        }
    }
}
$classes.Keys | Sort-Object | Out-File -FilePath scratch\all_classes.txt -Encoding utf8
Write-Output "Total unique classes: $($classes.Count)"
