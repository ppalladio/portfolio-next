import { Assets, Resources, Sizes, Time } from '@/lib/three-utils';
import * as THREE from 'three';
import Camera from '@/app/components/SceneSettings/Camera';
import Renderer from '../SceneSettings/Renderer';
import World from '../SceneSettings/World/World';
export default class Experience {
    private static instance: Experience;
    public sizes!: Sizes;
    public scene!: THREE.Scene;
    public camera!: Camera;
    public renderer!: Renderer;
    public time!: Time;
    public world!: World;
    public resources!: Resources;
    constructor(public canvas: HTMLCanvasElement) {
        if (Experience.instance) {
            return Experience.instance;
        }

        Experience.instance = this;
        this.scene = new THREE.Scene();
        this.sizes = new Sizes();
        this.camera = new Camera(this);
        this.renderer = new Renderer(this);
        this.time = new Time();
        this.world = new World(this);
        this.resources = new Resources(Assets, this);
        this.time.on('time update', () => this.update());
        this.time.on('resize', () => this.resize());
        this.update();
    }
    public update() {
        this.camera.update();
        this.renderer.update();
    }
    public resize() {
        this.renderer.resize();
        this.camera.resize();
    }
}
