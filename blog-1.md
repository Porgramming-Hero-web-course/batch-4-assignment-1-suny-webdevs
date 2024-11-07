## Significance of Union (|) type and Intersection (&) type

Union and intersection types are two powerful features in TypeScript that help developers work with combinations of types in flexible and safe ways. Lets explain shortly:

### **Union Types**:

- A **union type** allows a variable to be one of multiple types.
- It's like saying, "This variable can either be one type or another, or even more types."
- You can use a union type when you want a variable to accept different types of values but not necessarily the same value every time.

**Example**:

```typescript
let value: string | number

value = "Hello" // Okay
value = 42 // Okay
value = true // Error: 'boolean' is not assignable to 'string | number'
```

In this case, the variable `value` can either be a **string** or a **number**, but not a **boolean**.

### **Intersection Types**:

- An **intersection type** combines multiple types into one.
- It’s like saying, "This variable must have all the properties of these types combined."
- You can use an intersection type when you want a variable to have properties or methods from **multiple types**.

**Example**:

```typescript
type Person = {
  name: string
}

type Employee = {
  jobTitle: string
}

type EmployeePerson = Person & Employee // Combining both Person and Employee

const employee: EmployeePerson = {
  name: "John",
  jobTitle: "Developer",
}
```

In this example, `EmployeePerson` is a type that has all the properties of both the `Person` and `Employee` types. So, any variable of type `EmployeePerson` needs to have both a `name` and a `jobTitle`.

Both union and intersection types help make your code more flexible and type-safe, making it easier to work with complex data structures and ensure that the types are as you expect them.
