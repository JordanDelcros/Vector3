[![Join the chat at https://gitter.im/JordanDelcros/OBJImg](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/JordanDelcros/OBJImg?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[[![npm version](https://badge.fury.io/js/objimg.svg)](https://badge.fury.io/js/objimg)](https://www.npmjs.com/package/objimg)

# Vector3

Vector3 JavaScript library

## Doc

### constructor
```javascript
	new Vector3(x, y, z);
	// or
	new Vector(otherVector);
```

### add
```javascript
	vector.add(x, y, z);
	// or
	vector.add(otherVector);
```

### substract
```javascript
	vector.substract(x, y, z);
	// or
	vector.substract(otherVector);
```

### multiply
```javascript
	vector.multiply(x, y, z);
	// or
	vector.multiply(otherVector);
```

### multiplyBy
```javascript
	vector.multiplyBy(number);
```

### divide
```javascript
	vector.divide(x, y, z);
	// or
	vector.divide(otherVector);
```

### divideBy
```javascript
	vector.divideBy(number);
```

### length
```javascript
	vector.length();
```

### dot
```javascript
	vector.dot(otherVector);
```

### cross
```javascript
	vector.cross(otherVector);
```

### normalize
```javascript
	vector.normalize();
```

### angle
```javascript
	vector.angle(otherVector);
```

### equal
```javascript
	vector.equal(otherVector);
```

### rotate
```javascript
	vector.rotate(otherVector);
```

### clone
```javascript
	vector.rotate(x, y, z);
	// or
	vector.clone(otherVector);
```