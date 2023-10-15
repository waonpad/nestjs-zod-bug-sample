import {
  WeaponAttribute,
  // CreateWeaponInput,
  // UpdateWeaponInput,
  // WeaponResponseSchema,
  // WeaponResponse,
  CreateWeaponInputSchema,
  // CreateWeaponInputDto,
  // UpdateWeaponInputSchema,
  // UpdateWeaponInputDto,
} from 'schema/dist';

export const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      {JSON.stringify(WeaponAttribute)}
      {JSON.stringify(CreateWeaponInputSchema)}
    </div>
  );
};
