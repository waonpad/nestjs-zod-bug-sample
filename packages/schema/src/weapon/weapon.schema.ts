import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export enum WeaponAttribute {
  Sword = 'sword',
  Bow = 'bow',
  Spear = 'spear',
  Axe = 'axe',
  Dagger = 'dagger',
}

const WeaponShema = z.object({
  id: z.number(),
  name: z.string(),
  attackPower: z.number(),
  attribute: z.nativeEnum(WeaponAttribute),
});

// id は autoincrement で生成されるので除外する
export const CreateWeaponInputSchema = WeaponShema.omit({
  id: true,
});

export const UpdateWeaponInputSchema = WeaponShema.omit({
  id: true,
});

export const WeaponResponseSchema = WeaponShema;

export type CreateWeaponInput = z.infer<typeof CreateWeaponInputSchema>;

export type UpdateWeaponInput = z.infer<typeof UpdateWeaponInputSchema>;

export type WeaponResponse = z.infer<typeof WeaponResponseSchema>;

export class CreateWeaponInputDto extends createZodDto(CreateWeaponInputSchema) {}

export class UpdateWeaponInputDto extends createZodDto(UpdateWeaponInputSchema) {}
