(function( window, document ){

	var Vector3 = function( x, y, z ){

		return new Vector3.fn.init(x, y, z);

	};

	Vector3.fn = Vector3.prototype = {
		constructor: Vector3,
		init: function( x, y, z ){

			if( x.constructor === Vector3 ){

				this.clone(x);

			}
			else {

				this.x = x || 0;
				this.y = y || 0;
				this.z = z || 0;

			};

			return this;

		},
		add: function( vector ){

			this.x += vector.x;
			this.y += vector.y;
			this.z += vector.z;

			return this;

		},
		substract: function( vector ){

			this.x -= vector.x;
			this.y -= vector.y;
			this.z -= vector.z;

			return this;

		},
		multiply: function( vector ){

			this.x *= vector.x;
			this.y *= vector.y;
			this.z *= vector.z;

			return this;

		},
		divide: function( vector ){

			this.x /= vector.x;
			this.y /= vector.y;
			this.z /= vector.z;

			return this;

		},
		multiplyBy: function( number ){

			this.x *= number;
			this.y *= number;
			this.z *= number;

			return this;

		},
		divideBy: function( number ){

			this.x /= number;
			this.y /= number;
			this.z /= number;

			return this;

		},
		length: function(){

			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);

		},
		dot: function( vector ){

			return (this.x * vector.x) + (this.y * vector.y) + (this.z * vector.z);

		},
		cross: function( vector ){

			var x = this.x;
			var y = this.y;
			var z = this.z;

			this.x = y * vector.z - z * vector.y;
			this.y = z * vector.x - x * vector.z;
			this.z = x * vector.y - y * vector.x;

			return this;

		},
		normalize: function(){

			return Vector3(this).divideBy(this.length());

		},
		angle: function( vector ){

			return Math.acos(Vector3(this).dot(vector) / (Vector3(this).length() * Vector3(vector).length()));

		},
		equal: function( vector ){

			return this.x === vector.x && this.y === vector.y && this.z === vector.z;

		},
		rotate: function( vector ){

			var x1 = this.x;
			var y1 = this.y;
			var z1 = this.z;
			var angleX = vector.x / 2;
			var angleY = vector.y / 2;
			var angleZ = vector.z / 2;

			var cx = Math.cos(angleX);
			var cy = Math.cos(angleY);
			var cz = Math.cos(angleZ);
			var sx = Math.sin(angleX);
			var sy = Math.sin(angleY);
			var sz = Math.sin(angleZ);

			var w = cx * cy * cz + -sx * sy * sz;
			var x = sx * cy * cz - -cx * sy * sz;
			var y = cx * sy * cz + sx * cy * -sz;
			var z = cx * cy * sz - -sx * sy * cz;

			var m0 = 1 - 2 * ( y * y + z * z );
			var m1 = 2 * (x * y + z * w);
			var m2 = 2 * (x * z - y * w);

			var m4 = 2 * ( x * y - z * w );
			var m5 = 1 - 2 * ( x * x + z * z );
			var m6 = 2 * (z * y + x * w );

			var m8 = 2 * ( x * z + y * w );
			var m9 = 2 * ( y * z - x * w );
			var m10 = 1 - 2 * ( x * x + y * y );

			this.x = x1 * m0 + y1 * m4 + z1 * m8;
			this.y = x1 * m1 + y1 * m5 + z1 * m9;
			this.z = x1 * m2 + y1 * m6 + z1 * m10;

			return this;

		},
		clone: function( vector ){

			this.x = vector.x;
			this.y = vector.y;
			this.z = vector.z;

			return this;

		}
	};

	Vector3.fn.init.prototype = Vector3.fn;

	window.Vector3 = Vector3;

})(window, document);