import './style.css'
import './navbar.css'
import './gradients.css'
import './sections.css'
import '/animations.css'

// NAVBAR & HAMBURGER MENU
const btn = document.getElementById('menu-btn')
const overlay = document.getElementById('overlay')
const menu = document.getElementById('mobile-menu')
const hideMenu = document.getElementById('nav')

btn.addEventListener('click', navToggle)

function navToggle() {
	btn.classList.toggle('open')
	overlay.classList.toggle('overlay-show')
	menu.classList.toggle('show-menu')
	hideMenu.classList.toggle('hide')
}

// TEAM CARDS
const card1 = document.getElementById('card1')
const cardFlip1 = document.getElementById('cardFlip1')
const cardClose1 = document.getElementById('cardClose1')
card1.addEventListener('click', cardToggle1)
function cardToggle1() {
	cardFlip1.classList.add('visible')
}
cardClose1.addEventListener('click', close1)
function close1() {
	cardFlip1.classList.remove('visible')
}

const card2 = document.getElementById('card2')
const cardFlip2 = document.getElementById('cardFlip2')
const cardClose2 = document.getElementById('cardClose2')
card2.addEventListener('click', cardToggle2)
function cardToggle2() {
	cardFlip2.classList.add('visible')
}
cardClose2.addEventListener('click', close2)
function close2() {
	cardFlip2.classList.remove('visible')
}

const card3 = document.getElementById('card3')
const cardFlip3 = document.getElementById('cardFlip3')
const cardClose3 = document.getElementById('cardClose3')
card3.addEventListener('click', cardToggle3)
function cardToggle3() {
	cardFlip3.classList.add('visible')
}
cardClose3.addEventListener('click', close3)
function close3() {
	cardFlip3.classList.remove('visible')
}

const card4 = document.getElementById('card4')
const cardFlip4 = document.getElementById('cardFlip4')
const cardClose4 = document.getElementById('cardClose4')
card4.addEventListener('click', cardToggle4)
function cardToggle4() {
	cardFlip4.classList.add('visible')
}
cardClose4.addEventListener('click', close4)
function close4() {
	cardFlip4.classList.remove('visible')
}

// FADE IN EFFECTS WITH DELAY
const observerFast = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('showFast')
		}
	})
})

const observerMedium = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('showMedium')
		}
	})
})

const observerSlow = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('showSlow')
		}
	})
})

const observerSlowest = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('showSlowest')
		}
	})
})

const observerLeft = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('showLeft')
		}
	})
})

const fadeInFast = document.querySelectorAll('.fadeInFast')
fadeInFast.forEach((el) => observerFast.observe(el))

const fadeInMedium = document.querySelectorAll('.fadeInMedium')
fadeInMedium.forEach((el) => observerMedium.observe(el))

const fadeInSlow = document.querySelectorAll('.fadeInSlow')
fadeInSlow.forEach((el) => observerSlow.observe(el))

const fadeInSlowest = document.querySelectorAll('.fadeInSlowest')
fadeInSlowest.forEach((el) => observerSlowest.observe(el))

const fadeLeft = document.querySelectorAll('.fadeLeft')
fadeLeft.forEach((el) => observerLeft.observe(el))

// Three JS
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	1,
	1000
)

const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#gltfModels'),
	alpha: true,
	antialias: true,
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x000000, 0)
camera.position.setZ(20)
renderer.render(scene, camera)
renderer.shadowMap.enabled = true
renderer.outputEncoding = THREE.sRGBEncoding

let frame
const gltfLoader1 = new GLTFLoader()
gltfLoader1.load('/img/gltfModels/frame.gltf', (gltfScene1) => {
	frame = gltfScene1.scene
	gltfScene1.scene.position.set(0, 0, 10)
	gltfScene1.scene.rotation.x = 0.6
	gltfScene1.scene.rotation.y = 9.1
	gltfScene1.scene.rotation.z = -0.1

	gltfScene1.scene.scale.set(20, 20, 20)
	scene.add(gltfScene1.scene)
})

const light1 = new THREE.PointLight(0xc1c1c1, 2, 50)
light1.position.set(0, 0, 55)

scene.add(light1)

function animate() {
	requestAnimationFrame(animate)

	renderer.render(scene, camera)
}

animate()
