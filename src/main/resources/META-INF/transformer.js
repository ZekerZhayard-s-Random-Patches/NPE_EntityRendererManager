
var ASMAPI = Java.type("net.minecraftforge.coremod.api.ASMAPI");
var Opcodes = Java.type("org.objectweb.asm.Opcodes");
var MethodInsnNode = Java.type("org.objectweb.asm.tree.MethodInsnNode");
var VarInsnNode = Java.type("org.objectweb.asm.tree.VarInsnNode");

function initializeCoreMod() {
    return {
        "EntityRendererManager_shouldRender": {
            "target": {
                "type": "METHOD",
                "class": "net/minecraft/client/renderer/entity/EntityRendererManager",
                "methodName": "func_225626_a_",
                "methodDesc": "(Lnet/minecraft/entity/Entity;Lnet/minecraft/client/renderer/culling/ClippingHelper;DDD)Z"
            },
            "transformer": function (mn) {
                var insnList = mn.instructions.toArray();
                for (var i = 0; i < insnList.length; i++) {
                    var node = insnList[i];
                    if (node.getOpcode() === Opcodes.INVOKEVIRTUAL && node.owner.equals("net/minecraft/client/renderer/entity/EntityRendererManager") && node.name.equals(ASMAPI.mapMethod("func_78713_a")) && node.desc.equals("(Lnet/minecraft/entity/Entity;)Lnet/minecraft/client/renderer/entity/EntityRenderer;")) {
                        mn.instructions.insert(node, new MethodInsnNode(Opcodes.INVOKESTATIC, "io/github/zekerzhayard/npe_entityrenderermanager/NPE_EntityRendererManager", "check", "(Lnet/minecraft/client/renderer/entity/EntityRenderer;Lnet/minecraft/entity/Entity;)Lnet/minecraft/client/renderer/entity/EntityRenderer;", false));
                        mn.instructions.insert(node, new VarInsnNode(Opcodes.ALOAD, 1));
                    }
                }
                return mn;
            }
        }
    }
}