const app = Vue.createApp({
    data() {
        return {
            productos: [
                { nombre: 'Labial mate', cantidad: 3, precio: 150 },
                { nombre: 'Base líquida', cantidad: 2, precio: 320 }
            ],
            nuevo: {
                nombre: '',
                cantidad: '',
                precio: ''
            }
        }
    },
    computed: {
        subtotal() {
            return this.productos.reduce(
                (total, p) => total + p.cantidad * p.precio, 0
            );
        },
        iva() {
            return (this.subtotal * 0.16).toFixed(2);
        },
        total() {
            return (this.subtotal * 1.16).toFixed(2);
        },
        totalCantidad() {
            return this.productos.reduce(
                (total, p) => total + p.cantidad, 0
            );
        }
    },
    methods: {
        agregarProducto() {
            if (this.nuevo.nombre && this.nuevo.cantidad > 0 && this.nuevo.precio > 0) {
                this.productos.push({ ...this.nuevo });
                this.nuevo.nombre = '';
                this.nuevo.cantidad = '';
                this.nuevo.precio = '';
            }
        },
        eliminarProducto(index) {
            this.productos.splice(index, 1);
        }
    }
});

app.mount('#componente');
