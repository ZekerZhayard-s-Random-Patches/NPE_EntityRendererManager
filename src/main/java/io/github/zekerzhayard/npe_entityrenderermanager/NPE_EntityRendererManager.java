package io.github.zekerzhayard.npe_entityrenderermanager;

import net.minecraft.client.renderer.entity.EntityRenderer;
import net.minecraft.entity.Entity;
import net.minecraftforge.fml.common.Mod;

@Mod("npe_entityrenderermanager")
public class NPE_EntityRendererManager {
    public static EntityRenderer<?> check(EntityRenderer<?> renderer, Entity entity) {
        if (entity == null) {
            throw new RuntimeException("Entity is null!");
        }
        if (renderer == null) {
            throw new RuntimeException("EntityRenderer is null! (Entity: (" + entity.getClass() + ") " + entity + ")");
        }
        return renderer;
    }
}
