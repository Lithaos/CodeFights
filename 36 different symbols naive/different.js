function differentSymbolsNaive(s) {
    let unique = [...new Set(s)]; 
    console.log(unique);
    return unique.length;
}
