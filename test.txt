$folder1 = "D:\folder1"
$folder2 = "D:\folder2"

$firstFolder = Get-ChildItem -Recurse $folder1 | Where-Object { -not $_.PsIsContainer }
$failedCount = 0
$i = 0
$totalCount = $firstFolder.Count
$firstFolder | ForEach-Object {
    $i = $i + 1
    Write-Progress -Activity "Searching Files" -status "Searching File  $i of $totalCount" -percentComplete ($i / $firstFolder.Count * 100)
    If ( Test-Path ( $_.FullName.Replace($folder1, $folder2) ) ) {
        If ( Compare-Object (Get-Content $_.FullName) (Get-Content $_.FullName.Replace($folder1, $folder2) ) ) {
            $fileSuffix = $_.FullName.TrimStart($folder1)
            $failedCount = $failedCount + 1
            Write-Host "$fileSuffix is on each server, but does not match"
        }
    } else {
        $fileSuffix = $_.FullName.TrimStart($folder1)
        $failedCount = $failedCount + 1
        Write-Host $_.FullName
        # 여기서 복사 명령어가 오류나고 있음. ($folder1에만 존재하는 파일 복사)
        # Copy-Item -Path $_.FullName -Destination "D:\diff-folder\$fileSuffix" -Recurse -force
        
        # Write-Host "$fileSuffix is only in folder $folder1"
    }
}

$secondFolder = Get-ChildItem -Recurse $folder2 | Where-Object { -not $_.PsIsContainer }
$i = 0
$totalCount = $secondFolder.Count
$secondFolder | ForEach-Object {
    $i = $i + 1
    Write-Progress -Activity "Searching for files only on second folder" -status "Searching File  $i of $totalCount" -percentComplete ($i / $secondFolder.Count * 100)
    If (!(Test-Path($_.FullName.Replace($folder2, $folder1))))
    {
        $fileSuffix = $_.FullName.TrimStart($folder2)
        $failedCount = $failedCount + 1
        # Write-Host $_.FullName
        # 여기서 복사 명령어가 오류나고 있음. ($folder2에만 존재하는 파일 복사)
        # Copy-Item -Path $_.FullName -Destination "D:\diff-folder\$fileSuffix" -Recurse -force
        # Write-Host "$fileSuffix is only in folder $folder2"
    }
}
