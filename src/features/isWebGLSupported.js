export default (() => {
	const canvas = document.createElement('canvas');
	const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

	/* eslint-disable no-undef */
	return (gl && gl instanceof WebGLRenderingContext);
	/* eslint-enable no-undef */
})();
