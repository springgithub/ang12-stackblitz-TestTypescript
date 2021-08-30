function f1(): void {
  let v1 = 12;

}

function f2(): string {
  return "ola";
}

function f3(): string {
  let g: string;
  g = f2();
  return g;
}