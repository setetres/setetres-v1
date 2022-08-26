<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <main class="w-full">
      <Nuxt />
      <div id="frame" class="fixed w-full min-h-screen z-20">
        <div
          id="sigil"
          class="absolute w-full h-full top-0 left-0 pointer-events-none"
        />
      </div>
      <div>
        <div class="relative z-30">
          <div class="max-w-7xl mx-auto p-8 lg:p-16">
            <p class="text-xl text-white uppercase">Design & Development</p>
            <h2
              class="
                text-4xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                xl:text-9xl
                text-white
                italic
              "
            >
              <a
                href="https://setetres.st"
                target="_blank"
                rel="noreferrer noopener"
              >
                SETETRES.ST
              </a>
            </h2>
            <p
              class="
                font-serif
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                xl:text-6xl
                text-white
              "
            >
              Estabilished in 2008.
            </p>
          </div>
        </div>
        <hr class="relative z-10" />
        <div class="relative z-30">
          <div class="max-w-7xl mx-auto p-8 md:p-12 lg:p-16">
            <p class="text-xl text-white uppercase">Music & Video</p>
            <h2
              class="
                text-4xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                xl:text-9xl
                text-white
                italic
              "
            >
              <a
                href="https://xxxxxxx.ooo"
                target="_blank"
                rel="noreferrer noopener"
              >
                XXXXXXX.OOO
              </a>
            </h2>
            <p
              class="
                font-serif
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                xl:text-6xl
                text-white
              "
            >
              A knife-grinder music endeavor.
            </p>
          </div>
        </div>
        <hr class="relative z-10" />
        <div class="relative z-30">
          <div class="max-w-7xl mx-auto p-8 md:p-12 lg:p-16">
            <p class="text-xl text-white uppercase">Art Collective</p>
            <h2
              class="
                text-4xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                xl:text-9xl
                text-white
                italic
              "
            >
              <a
                href="https://mortelenta.org"
                target="_blank"
                rel="noreferrer noopener"
              >
                MORTELENTA.ORG
              </a>
            </h2>
            <p
              class="
                font-serif
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                xl:text-6xl
                text-white
              "
            >
              Fellowship of the stream.
            </p>
          </div>
        </div>
        <hr class="relative z-10" />
        <div class="relative z-30">
          <div class="max-w-7xl mx-auto p-8 md:p-12 lg:p-16">
            <p class="text-xl text-white uppercase">
              Streaming & Entertainment
            </p>
            <h2
              class="
                text-4xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                xl:text-9xl
                text-white
                italic
              "
            >
              <a
                href="https://creepycrappy.show"
                target="_blank"
                rel="noreferrer noopener"
              >
                CREEPYCRAPPY.SHOW
              </a>
            </h2>
            <p
              class="
                font-serif
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                xl:text-6xl
                text-white
              "
            >
              Yet another streaming channel.
            </p>
          </div>
        </div>
        <hr class="relative z-10" />
        <div class="relative z-30">
          <div class="max-w-7xl mx-auto p-8 md:p-12 lg:p-16">
            <p class="text-xl text-white uppercase">
              Gaming & Modding
            </p>
            <h2
              class="
                text-4xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                xl:text-9xl
                text-white
                italic
              "
            >
              <a
                href="https://hashima.gg"
                target="_blank"
                rel="noreferrer noopener"
              >
                HASHIMA.GG
              </a>
            </h2>
            <p
              class="
                font-serif
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                xl:text-6xl
                text-white
              "
            >
              DayZ Modded Map
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import * as THREE from '../node_modules/three/build/three.module.js'
import { OBJLoader } from '../node_modules/three/examples/jsm/loaders/OBJLoader.js'

export default {
  beforeRouteLeave(to, from, next) {
    this.$nextTick(() => {
      next()
    })
  },
  mounted() {
    this.$nextTick(() => {
      let camera, scene, renderer, object

      const frame = document.querySelector('#frame')
      const container = document.querySelector('#sigil')

      let mouseX = 0
      let mouseY = 0

      let windowHalfX = frame.clientWidth / 2
      let windowHalfY = frame.clientHeight / 2

      init()
      animate()

      function init() {
        camera = new THREE.PerspectiveCamera(
          1,
          frame.clientWidth / frame.clientHeight,
          1,
          2000
        )
        camera.position.z = 250

        scene = new THREE.Scene()

        const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4)

        scene.add(ambientLight)

        const pointLight = new THREE.PointLight(0xffffff, 0.8)

        camera.add(pointLight)
        scene.add(camera)

        function loadModel() {
          object.traverse(function (child) {
            if (child.isMesh) child.material.map = texture
          })

          object.position.y = 0
          scene.add(object)
        }

        const manager = new THREE.LoadingManager(loadModel)

        const random = Math.floor(Math.random() * 7) + 0
        const bigSize = [
          '/texture-01.jpg',
          '/texture-02.jpg',
          '/texture-03.jpg',
          '/texture-04.jpg',
          '/texture-05.jpg',
          '/texture-06.jpg',
          '/texture-07.jpg',
        ]

        const textureLoader = new THREE.TextureLoader(manager)
        const texture = textureLoader.load(bigSize[random])

        const loader = new OBJLoader(manager)

        loader.load('sigil.obj', function (obj) {
          object = obj
        })

        renderer = new THREE.WebGLRenderer({ alpha: true })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(frame.clientWidth, frame.clientHeight)

        container.appendChild(renderer.domElement)

        document.addEventListener('mousemove', onDocumentMouseMove)
        window.addEventListener('resize', onWindowResize)
      }

      function onWindowResize() {
        windowHalfX = frame.clientWidth / 2
        windowHalfY = frame.clientHeight / 2

        camera.aspect = frame.clientWidth / frame.clientHeight
        camera.updateProjectionMatrix()

        renderer.setSize(frame.clientWidth, frame.clientHeight)
      }

      function onDocumentMouseMove(event) {
        mouseX = (event.clientX - windowHalfX) / 2
        mouseY = (event.clientY - windowHalfY) / 2
      }

      function animate() {
        requestAnimationFrame(animate)

        render()
      }

      function render() {
        camera.position.x += (mouseX - camera.position.x) * 0.05
        camera.position.y += (-mouseY - camera.position.y) * 0.05
        camera.lookAt(scene.position)

        renderer.render(scene, camera)
      }
    })
  },
}
</script>
