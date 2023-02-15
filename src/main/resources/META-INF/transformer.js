
var Opcodes = Java.type("org.objectweb.asm.Opcodes");
var InsnList = Java.type("org.objectweb.asm.tree.InsnList");
var InsnNode = Java.type("org.objectweb.asm.tree.InsnNode");
var JumpInsnNode = Java.type("org.objectweb.asm.tree.JumpInsnNode");
var LabelNode = Java.type("org.objectweb.asm.tree.LabelNode");
var VarInsnNode = Java.type("org.objectweb.asm.tree.VarInsnNode");

function initializeCoreMod() {
    return {
        "EntityRendererManager_shouldRender": {
            "target": {
                "type": "METHOD",
                "class": "net/minecraft/client/renderer/entity/EntityRendererManager",
                "methodName": "func_229086_a_",
                "methodDesc": "(Lnet/minecraft/entity/Entity;Lnet/minecraft/client/renderer/culling/ClippingHelper;DDD)Z"
            },
            "transformer": function (mn) {
                var insnList = mn.instructions.toArray();
                for (var i = 0; i < insnList.length; i++) {
                    var node = insnList[i];
                    if (node.getOpcode() === Opcodes.ASTORE) {
                        var il = new InsnList();
                        var ln = new LabelNode();
                        il.add(new VarInsnNode(Opcodes.ALOAD, node.var));
                        il.add(new JumpInsnNode(Opcodes.IFNONNULL, ln));
                        il.add(new InsnNode(Opcodes.ICONST_0));
                        il.add(new InsnNode(Opcodes.IRETURN));
                        il.add(ln)
                        mn.instructions.insert(node, il);
                    }
                }
                return mn;
            }
        }
    }
}