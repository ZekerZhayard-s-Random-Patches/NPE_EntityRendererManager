package io.github.zekerzhayard.npe_entityrenderermanager;

import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.fonts.FontResourceManager;
import net.minecraft.client.renderer.entity.EntityRenderer;
import net.minecraft.entity.Entity;
import net.minecraft.util.ResourceLocation;

public class DummyEntityRenderer extends EntityRenderer<Entity> {
    public static EntityRenderer<?> INSTANCE = new DummyEntityRenderer();

    public static EntityRenderer<?> checkNull(EntityRenderer<?> renderer) {
        return renderer == null ? INSTANCE : renderer;
    }

    protected DummyEntityRenderer() {
        super(Minecraft.getInstance().getRenderManager());
    }

    @Override
    public ResourceLocation getEntityTexture(Entity entity) {
        return FontResourceManager.MISSING_TEXTURE;
    }
}
