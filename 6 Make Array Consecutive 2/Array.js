function makeArrayConsecutive2(statues) {
    var count = 0;
    var min = Math.min.apply(Math, statues);
    var max = Math.max.apply(Math, statues);
    count = max - min;
    return count - (statues.length - 1);
}
