$imageUrls = @{
    "electronics" = @{
        "macbook-pro.jpg" = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
        "iphone-15-pro.jpg" = "https://images.unsplash.com/photo-1592286927505-1def25115558?w=800&q=80"
        "wireless-headphones.jpg" = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
        "smart-watch.jpg" = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
        "4k-monitor.jpg" = "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80"
    }
    "clothing" = @{
        "designer-tshirt.jpg" = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"
        "denim-jeans.jpg" = "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80"
        "winter-jacket.jpg" = "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80"
        "running-shoes.jpg" = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
    }
    "home" = @{
        "coffee-maker.jpg" = "https://images.unsplash.com/photo-1534062085-f5e1f8e1f8f1?w=800&q=80"
        "air-purifier.jpg" = "https://images.unsplash.com/photo-1571408800539-77a83c748c08?w=800&q=80"
        "garden-tools.jpg" = "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"
        "smart-thermostat.jpg" = "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80"
    }
    "sports" = @{
        "basketball.jpg" = "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80"
        "yoga-mat.jpg" = "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=800&q=80"
        "dumbbells-set.jpg" = "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80"
        "tennis-racket.jpg" = "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80"
    }
}

# Create directories if they don't exist
foreach ($category in $imageUrls.Keys) {
    $dir = "images/$category"
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir | Out-Null
    }
}

# Download images
foreach ($category in $imageUrls.Keys) {
    foreach ($filename in $imageUrls[$category].Keys) {
        $url = $imageUrls[$category][$filename]
        $outputPath = "images/$category/$filename"
        Write-Host "Downloading $filename..."
        try {
            Invoke-WebRequest -Uri $url -OutFile $outputPath
            Write-Host "Successfully downloaded $filename"
        } catch {
            Write-Host "Failed to download $filename"
        }
    }
}

Write-Host "All images downloaded successfully!" 