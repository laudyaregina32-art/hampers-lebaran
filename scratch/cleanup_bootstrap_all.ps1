$files = Get-ChildItem -Filter *.html

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $orig = $content

    # Remove bootstrap preload tag
    $content = [regex]::Replace($content, '\s*<link rel="preload" href="https://cdn\.jsdelivr\.net/npm/bootstrap@5\.3\.3/dist/css/bootstrap\.min\.css"[^>]*>', '')
    
    # Remove bootstrap noscript tag
    $content = [regex]::Replace($content, '\s*<noscript>\s*<link rel="stylesheet" href="https://cdn\.jsdelivr\.net/npm/bootstrap@5\.3\.3/dist/css/bootstrap\.min\.css"[^>]*>\s*</noscript>', '')
    
    # Remove bootstrap direct stylesheet link tag if any
    $content = [regex]::Replace($content, '\s*<link rel="stylesheet" href="https://cdn\.jsdelivr\.net/npm/bootstrap@5\.3\.3/dist/css/bootstrap\.min\.css"[^>]*>', '')

    # Remove bootstrap bundle JS script tag
    $content = [regex]::Replace($content, '\s*<!-- Bootstrap JS Bundle -->\s*<script src="https://cdn\.jsdelivr\.net/npm/bootstrap@5\.3\.3/dist/js/bootstrap\.bundle\.min\.js"[^>]*>\s*</script>', '')
    $content = [regex]::Replace($content, '\s*<script src="https://cdn\.jsdelivr\.net/npm/bootstrap@5\.3\.3/dist/js/bootstrap\.bundle\.min\.js"[^>]*>\s*</script>', '')

    # Fix broken logo height line break
    $content = [regex]::Replace($content, 'class="hl-navbar-logo" width="48" height="48\s*"', 'class="hl-navbar-logo" width="48" height="48"')

    if ($content -ne $orig) {
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Updated $($file.Name)"
    }
}
Write-Host "Bootstrap cleanup complete!"
