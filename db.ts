import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/ui/PageHeader";
import { Table, Th, Td, EmptyState } from "@/components/ui/Table";

export default async function CustomersPage() {
  const customers = await prisma.customer.findMany({
    include: { _count: { select: { vehicles: true } } },
    orderBy: { name: "asc" },
  });

  return (
    <div>
      <PageHeader
        title="Kunden"
        description="Alle Kunden mit Anzahl zugeordneter Fahrzeuge."
      />
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Telefon</Th>
            <Th>E-Mail</Th>
            <Th>Fahrzeuge</Th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {customers.map((customer) => (
            <tr key={customer.id}>
              <Td>{customer.name}</Td>
              <Td>{customer.phone ?? "–"}</Td>
              <Td>{customer.email ?? "–"}</Td>
              <Td>{customer._count.vehicles}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      {customers.length === 0 && <EmptyState label="Noch keine Kunden angelegt." />}
    </div>
  );
}
