import { Input } from "./input";
import { Label } from "./label";

export default function FormField({
  label,
  id,
  value,
  onChange,
  disabled,
}: any) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} value={value} onChange={onChange} disabled={disabled} />
    </div>
  );
}
