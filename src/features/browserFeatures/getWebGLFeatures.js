export default (() => {
	const canvas = document.createElement('canvas');
	const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

	/* eslint-disable no-undef */
	if(!gl || !gl instanceof WebGLRenderingContext) return false;
	/* eslint-enable no-undef */

	const glExtensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');

	const features = {
		renderer: gl.getParameter(gl.RENDERER),
		vendor: gl.getParameter(gl.VENDOR),
		version: gl.getParameter(gl.VERSION),
		shaderVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
		rendererUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL),
		vendorUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL),

		supportedExtensions: gl.getSupportedExtensions(),
		antialias: !!gl.getContextAttributes().antialias,
	};

	return features;
})();
