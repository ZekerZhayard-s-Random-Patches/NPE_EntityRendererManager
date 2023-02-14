
var ASMAPI = Java.type("net.minecraftforge.coremod.api.ASMAPI");
var Opcodes = Java.type("org.objectweb.asm.Opcodes");
var InsnNode = Java.type("org.objectweb.asm.tree.InsnNode");
var MethodInsnNode = Java.type("org.objectweb.asm.tree.MethodInsnNode");
var TypeInsnNode = Java.type("org.objectweb.asm.tree.TypeInsnNode");

function initializeCoreMod() {
    return {
        "EntityRendererManager_shouldRender": {
            "target": {
                "type": "METHOD",
                "class": "net/minecraft/client/renderer/entity/EntityRendererManager",
                "methodName": "<init>",
                "methodDesc": "(Lnet/minecraft/client/renderer/texture/TextureManager;Lnet/minecraft/client/renderer/ItemRenderer;Lnet/minecraft/resources/IReloadableResourceManager;Lnet/minecraft/client/gui/FontRenderer;Lnet/minecraft/client/GameSettings;)V"
            },
            "transformer": function (mn) {
                var insnList = mn.instructions.toArray();
                for (var i = 0; i < insnList.length; i++) {
                    var node = insnList[i];
                    if (node.getOpcode() === Opcodes.PUTFIELD && node.owner.equals("net/minecraft/client/renderer/entity/EntityRendererManager") && node.name.equals(ASMAPI.mapField("field_78729_o")) && node.desc.equals("Ljava/util/Map;")) {
                        mn.instructions.insertBefore(node, new InsnNode(Opcodes.POP));
                        mn.instructions.insertBefore(node, new TypeInsnNode(Opcodes.NEW, "java/util/concurrent/ConcurrentHashMap"));
                        mn.instructions.insertBefore(node, new InsnNode(Opcodes.DUP));
                        mn.instructions.insertBefore(node, new MethodInsnNode(Opcodes.INVOKESPECIAL, "java/util/concurrent/ConcurrentHashMap", "<init>", "()V", false));
                    }
                }
                return mn;
            }
        }
    }
}