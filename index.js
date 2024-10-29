// your code here
const text = `
product:Lenovo X200
product text:Small, reparable, classic laptop with great ports
specifications:
    cpu: Intel Core 2 Duo T9600
    installed memory: 2x 4GB DDR3-1066
    storage: 128GB SSD
current price: 500
`;

function textToData(text) {
  const lines = text.trim().split('\n');
  const data = {};
  let i = 0;

  while (i < lines.length) {
    let line = lines[i].trim();
    if (line === '') {
      i++;
      continue;
    }

    let [key, value] = line.split(':').map(part => part.trim());

    if (value === '') {
      data[key] = {};
      i++;
      while (i < lines.length && lines[i].startsWith('    ')) {
        let nestedLine = lines[i].trim();
        let [nestedKey, nestedValue] = nestedLine.split(':').map(part => part.trim());
        data[key][nestedKey] = nestedValue;
        i++;
      }
    } else {
      data[key] = value;
      i++;
    }
  }

  return data;
}

const result = textToData(text);
console.log(result);