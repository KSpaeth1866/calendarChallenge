var times = [
  {start: 0, end: 500},
  {start: 0, end: 200},
  {start: 200, end: 630},
  {start: 0, end: 500},
  {start: 0, end: 200},
  {start: 200, end: 630},
  {start: 650, end: 700}
];

times = times.sort((a,b) => a.start - b.start);

getBuckets = (times) => {
  let buckets = {}
  let bucketCount = 0;
  let lastEnd = 0;

  for (let i = 0; i < times.length - 1; i++) {

    let j = 1;
    if (times[i].start > lastEnd) bucketCount++;
    buckets[bucketCount] = buckets[bucketCount] || [];

    let nextTime = times[i+j];
    while (nextTime.start < times[i].end){
      buckets[bucketCount].push(nextTime);
      nextTime = times[i + (++j)]
    }
    lastEnd = Math.max(lastEnd, times[i].end);
  }

  return buckets;
}
