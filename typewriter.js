const sentence = "hello there from lighthouse labs";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char); // print the char here
  }, delay += 50); // <= 1s delay to make it noticeable. Can dial it down later.
}
setTimeout(() => {
  process.stdout.write("\n");
}, delay);
