class Foot extends THREE.Object3D{
	constructor(){
		super();
		var loader = new THREE.GLTFLoader();

		loader.load( './models/left.glb',  ( geometry ) => {
     		this.add( new THREE.Mesh( geometry ) );
     		console.log("LOADED:", geometry)
   		})

		//loader.parse( gltfData, null, ( gdata ) => {
		//	this.add(gdata.scene);
		//	this.headShape=gdata.scene
		//	this.headShape.scale.x = this.headShape.scale.y = this.headShape.scale.z = 8;
		//	this.headShape.rotation.x = 3.14159
		//	this.headShape.rotation.z = 3.14159
		//	//console.log(this.headShape.children[2])
		//	this.headShape.children[2].material.color.set(this.skinColor);
		//	this.headShape.children[2].material.metalness = 0.2;
		//	this.headShape.children[2].material.roughness = 0.7;
		//	this.headShape.castShadow = true;
		//	this.castShadow = true;
		//	this.headShape.children[2].castShadow = true;
		//});

	}
}