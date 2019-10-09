const hanoiTower = (disk = 1, sourceTower = '#1', tempTower = '#2', destinationTower = '#3') => {
  if (disk === 1) {
    console.log(`Перекладываем диск 1 с ${sourceTower} на ${destinationTower}`);
    return;
  } else {
    hanoiTower(disk-1, sourceTower, destinationTower, tempTower);
    console.log(`Перекладываем диск ${disk} с ${sourceTower} на ${destinationTower}`);
    hanoiTower(disk-1, tempTower, sourceTower, destinationTower);
  }
}

hanoiTower(3);
