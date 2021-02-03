let count: number;
count = 123;

function add({ f, s }: { f: number; s: number }) {
  return f + s + "";
}
const totla = add({ f: 1, s: 2 });

function getNumber({ f }: { f: number }) {
  return f;
}

const ad = getNumber({ f: 1 });
