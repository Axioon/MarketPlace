import request from 'supertest';
import app from '../server.js';

describe('get/articulo', () => {
    it('should return all articles when making a GET request to articles', async () => {
        const response = await request(app).get('/api/v1/articulo');
        expect(response.status).toBe(200);
        expect(response.body.posts).toBeDefined();
    });

    it('Debería responder con una serie de artículos', async () => {
        jest.spyOn(pool, 'query').mockImplementation(() => {
            throw new Error('Error en la base de datos');
        });

        const response = await request(app).get('/api/v1/articulo');
        expect(response.status).toBe(501);
        expect(response.body.error).toEqual('Error en la base de datos');
    });


    describe('post/articulo', () => {
        it('Debería crear un nuevo artículo al hacer una solicitud POST a /api/v1/articulo', async () => {
            // Datos del nuevo artículo a crear
            const nuevoArticulo = {
                nombre: 'Nuevo Artículo',
                descripcion: 'Descripción del nuevo artículo',
                categoria_id: 1,
                precio: 99.99,
                stock: 10,
                img: 'url_imagen'
            };

            // Realizar la solicitud POST para crear el nuevo artículo
            const response = await request(app)
                .post('/api/v1/articulo')
                .send(nuevoArticulo);
            expect(response.status).toBe(201);
            expect(response.body.post).toBeDefined(); // Verificar que se reciba una respuesta con el nuevo artículo creado
        });

        it('Debería devolver un estado 500 y un mensaje de error en caso de fallo al procesar la solicitud', async () => {

            jest.spyOn(createPostModelArticulo, 'createPostModelArticulo').mockImplementation(() => {
                throw new Error('Error al crear el artículo');
            });

            // Realizar la solicitud POST
            const response = await request(app)
                .post('/api/v1/articulo')
                .send({
                    nombre: 'Nuevo Artículo',
                    descripcion: 'Descripción del nuevo artículo',
                    categoria_id: 1,
                    precio: 99.99,
                    stock: 10,
                    img: 'url_imagen'
                });

            // Verificar que se reciba un estado 500 y un mensaje de error en la respuesta
            expect(response.status).toBe(500);
            expect(response.body.error).toEqual('Error al crear el artículo');
        });
    });

    describe('put/articulo/:id', () => {
        it('Debería actualizar un artículo existente', async () => {
            // Supongamos que tienes un objeto 'nuevoArticulo' con los datos a actualizar
            const nuevoArticulo = {
                nombre: "SSD Samsung 970 EVO",
                capacidad: "1TB",
                interfaz: "PCIe Gen 3.0 x4, NVMe 1.3",
                velocidadLectura: "3500 MB/s",
                velocidadEscritura: "2500 MB/s",
                formato: "M.2 2280",
                precio: 199.99
            }

            // Realiza una solicitud PUT a la ruta /articulo/:id con el objeto nuevoArticulo
            const response = await request(app)
                .put('/articulo/ID_DEL_ARTICULO_A_ACTUALIZAR') // Reemplaza 'ID_DEL_ARTICULO_A_ACTUALIZAR' con el ID del artículo que deseas actualizar
                .send(nuevoArticulo);

            expect(response.status).toBe(200);
        });
    });


    describe(' delete/articulo/:id', () => {
        it('Debería eliminar un artículo existente', async () => {
          // Realiza una solicitud DELETE a la ruta /articulo/:id con un ID de artículo válido
          const response = await request(app)
            .delete('/articulo/ID_DEL_ARTICULO_A_ELIMINAR') // Reemplaza 'ID_DEL_ARTICULO_A_ELIMINAR' con el ID del artículo que deseas eliminar
            .send();
      
          // Verifica que la respuesta tenga el código de estado esperado (por ejemplo, 200 OK)
          expect(response.status).toBe(200);
      
        });
      
        it('Debería devolver un error si el artículo no existe', async () => {
          // Realiza una solicitud DELETE a la ruta /articulo/:id con un ID de artículo que no existe
          const response = await request(app)
            .delete('/articulo/ID_INEXISTENTE') // Reemplaza 'ID_INEXISTENTE' con un ID que no exista en tu base de datos
            .send();
      
          // Verifica que la respuesta tenga el código de estado esperado (por ejemplo, 404 Not Found)
          expect(response.status).toBe(404);
      
        
        });
      });









});

