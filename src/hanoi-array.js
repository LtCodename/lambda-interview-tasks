const hanoiTower = (disk = 1) => {
  const sourceTower = [];
  const tempTower = [];
  const destinationTower = [];

  // Наполняем первую башню
  for (let i = disk; i > 0; i--) {
    sourceTower.push(i);
  }

  constructTower(disk, sourceTower, tempTower, destinationTower);
};

const constructTower = (disk = 1, sourceTower, tempTower, destinationTower) => {
  if (disk === 1) {
    const movedDisk = sourceTower.splice(sourceTower.length - 1, 1);
    destinationTower.push(...movedDisk);
    return;
  } else {
    constructTower(disk-1, sourceTower, destinationTower, tempTower);

    const movedDisk = sourceTower.splice(sourceTower.length - 1, 1);
    destinationTower.push(...movedDisk);

    constructTower(disk-1, tempTower, sourceTower, destinationTower);
  }
};

hanoiTower(4);
