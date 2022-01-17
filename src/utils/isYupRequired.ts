export const isYupRequired = <T>(schema: any, fieldName: T) =>
  schema
    .describe()
    .fields[fieldName].tests.some(
      ({ name }: { name: string }) => name === "required"
    );
