const dotsBetweenSymbols = (data) => {
  // Если передали не стрингу, то не выполнять остаток кода, возвращаю аргумент назад
  if (typeof data !== 'string' || data.length < 2) {
    return data;
  }

  /**Считаю сколько всего возможных комбинаций перестановки точек. Пока учитывается лишний вариант, который не пойдет в
  * ответ (вообще без точек). 2 в формуле потому что у каждого символа может быть только два варианта - с точкой и без
  */
  const possibleCombinations = Math.pow(2, data.length - 1);
  const result = Array(possibleCombinations);

  // Проходимся по каждой букве
  for (let i = 0; i < data.length; i++) {
    /**Алгоритм одинаковый для всех букв, кроме последней. Она всегда без точки. Поэтому нужна развилка.
    * Сначала считаем для всех элементов, кроме последнего
    */

    // Если мы не на последней букве
    if (i !== data.length - 1) {
      /**Пример возможных комбинаций для abcd.
      * ["a.b.c.d", "a.b.cd", "a.bc.d", "a.bcd", "ab.c.d", "ab.cd", "abc.d", "abcd"]
      * Видно зависимость. У каждого символа есть свое количество групп-повторений. У а - это две (4 без точки, 4 - с точкой),
      * у b - 4 (первая и третья группы с точкой, вторая и четвертая - без) и т.д. Можно посчитать количество этих групп(чанков)
      * для каждой группы и их длину
      */

      // Количество чанков
      const numberOfChunks = Math.pow(2, i + 1);
      // Длина чанка в символах
      const chunkLength = possibleCombinations / numberOfChunks;
      // Теперь проходим по каждому чанку для буквы
      for (let j = 0; j < numberOfChunks; j++) {
        // Пишем символы без точки при не парном номере чанка чтобы лишний (без точек) вариант попал в последний элемент массива
        const symbolToWrite = (j % 2 === 0) ? `${data[i]}.` : data[i];
        // Начальный индекс в массиве результатов для начала чанка равен индексу чанка умноженному на длину чанка
        let index = j * chunkLength;
        // Пишем высчитаный символ пока индекс не равен началу следующего чанка
        const limitIndex = (j + 1) * chunkLength;

        do{
          index++;

          if (!result[index - 1]) {
            result[index - 1] = '';
          }

          result[index - 1] += symbolToWrite;
        }while(index < limitIndex)
      }
    }else {
      // Последнюю букву всегда пишем без точки
      let index = 0;
      do{
        index++;

        result[index-1] += data[i];
      }while(index < possibleCombinations)
    }
  }

  // Последний элемент удаляем, это тот который вообще без точек
  result.pop();

  return result;
}

console.log(dotsBetweenSymbols('abcd'));
