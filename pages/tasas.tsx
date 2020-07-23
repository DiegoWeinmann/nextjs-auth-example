import { TasaTable } from 'components/TasaTable';
import { TasaForm } from 'components/TasaForm';
import { usePrivateRoute } from 'context/userContext/hooks';

export default function Tasas() {
  usePrivateRoute();
  return (
    <>
      <TasaForm />
      <TasaTable />
    </>
  );
}
