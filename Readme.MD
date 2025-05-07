<!-- * Interview Questions and Answers -->

1. ## What are some differences between interfaces and types in TypeScript?

   Answer: In TypeScript interfaces and types are two different methods to declare type or structure. Both of them define a structure of the values. Although both done the same task but there are some key difference between them. Differences:

   1. Type:
      - We need to start writing type using `type` key word. Example:
        type IsAdmin = boolean;
      - Types need to declare yhe value with a `=` sign. Example:
        type User = {
        name: string;
        }
      - We can direct write the type without any curly braces if there is only one single value. Example:
        type UserName = string;
      - For types we can use it for both single value types and object types and both will consider as best practice.
      - It is best practice to write types using uppercase the first letter.
   2. Interface:
      - We need to start writing interface using `interface` key word. Example:
        interface IUser {
        name: string;
        number: number;
        }
      - In interface we don't need to define the `=` sign to declare the type or structure. Example:
        interface ICar {
        name: string;
        model: string;
        }
      - We need to declare the initial curly braces even we need to write a single property type. Example:
        interface IAdmin {
        isAdmin: boolean
        }
      - For single property type it's not a best practice to use interface and for multi property types we can use interface.

Conclusion: These are some differences between Type and Interface inTypeScript.

2.  ## What is the use of the keyof keyword in TypeScript? Provide an example.

    Answer: In TypeScript keyof is a keyword which used to extract the keyword of any property key. Example:

          interface IUser {
              name: string;
              age: number;
          }
          Here I have written one simple interface IUser. It has 2 keys name and age with there values. Now I want to extract the keys of this interface. For this I need to use keyof keyword. Here is the example of how can we use keyof to extract the keys and values:

          const getKeyValue<T>(object: T, key: keyof T) => {
              return object[key]
          }

          In this getKeyValue function I have taken a Generic function T which can be anything. Let's assume it will be an object. This function is taking 2 parameter `object with generic type T` and `key is any key of generic object T`. Now it will return the value of the particular key value from that object.

          const user = {
            name: "X",
            email: "x.gmail.com",
            contactNumber: "1626272",
          };
        const result = getKeyValue(user, "name");

        Here in the function I have passed user as the object and key `name (Which I am taking keyof keyword in the function 2nd parameter)`. Now if I console the result, it will return value "X" as output since it's finding the value using the keyword of that object.
