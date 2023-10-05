
var Opcodes = Java.type("org.objectweb.asm.Opcodes");
var MethodInsnNode = Java.type("org.objectweb.asm.tree.MethodInsnNode");

function initializeCoreMod() {
    return {
        "EntityRendererManager_getRenderer": {
            "target": {
                "type": "METHOD",
                "class": "net/minecraft/client/renderer/entity/EntityRendererManager",
                "methodName": "func_78713_a",
                "methodDesc": "(Lnet/minecraft/entity/Entity;)Lnet/minecraft/client/renderer/entity/EntityRenderer;"
            },
            "transformer": function (mn) {
                for (var iterator = mn.instructions.iterator(); iterator.hasNext();) {
                    var node = iterator.next();
                    if (node.getOpcode() === Opcodes.ARETURN) {
                        mn.instructions.insertBefore(node, new MethodInsnNode(Opcodes.INVOKESTATIC, "io/github/zekerzhayard/npe_entityrenderermanager/DummyEntityRenderer", "checkNull", "(Lnet/minecraft/client/renderer/entity/EntityRenderer;)Lnet/minecraft/client/renderer/entity/EntityRenderer;", false));
                    }
                }
                return mn;
            }
        }
    }
}