<html>
<head>
    <title>3D Website</title>
    <style>
        body { margin: 0; }
        canvas { display: block; }
    </style>
</head>
<body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        let scene, camera, renderer, cube;

        function init() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            // Cube
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            const light = new THREE.PointLight(0xFFFFFF, 1, 100);
            light.position.set(10, 10, 10);
            scene.add(light);
            

            camera.position.z = 5;
           
            gsap.to(cube.rotation, {
            duration: 1,
             x: "+=2",
             y: "+=2",
             ease: "power2.inOut",
            });
            

            animate();
        }

        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }

        init();
    </script>
</body>
</html>
