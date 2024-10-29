# text-to-data
```js
const text = `

product:Lenovo X200
product text:Small, reparable, classic laptop with great ports
specifications:
    cpu: Intel Core 2 Duo T9600
    installed memory: 2x 4GB DDR3-1066
    storage: 128GB SSD
current price: 500

`

```


Pseudocode Instractions

1- Split the text into lines

2- For every line in the lines array 
    If the line is empty, continue to the next iteration of the loop

   2.1- Split the line by ":" into two parts: key and value

   2.2- Trim any leading or trailing whitespace from key and value

  2.3-  If the value is empty 
        We are dealing with a nested object
        Create a new empty object with the name of key in the main object

   2.4-   While the next line is indented by four spaces 
            Split the next line by ":" into two parts: nestedKey and nestedValue
            Trim any whitespace from nestedKey and nestedValue
            Add nestedKey and nestedValue to the nested object
            Move to the next line
        
2.5-    else 
        Add key and value to the main object
    

