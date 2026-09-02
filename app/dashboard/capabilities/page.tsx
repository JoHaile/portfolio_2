import { capabilities } from "@/data/capabilities"
import { CapabilitiesForm } from "@/components/dashboard/CapabilitiesForm"

export default function CapabilitiesPage() {
  return <CapabilitiesForm capabilities={capabilities} />
}
