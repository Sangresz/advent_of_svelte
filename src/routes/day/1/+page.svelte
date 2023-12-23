<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog";
  import * as Table from "$lib/components/ui/table";
  import { Label } from "$lib/components/ui/label";
  import { Input } from "$lib/components/ui/input";
  import { Button, buttonVariants } from "$lib/components/ui/button";

  type Child = {
    name: string;
    tally: number;
  };

  export let data: {
    childs: Child[];
  };

  let children = data.childs;

  function deleteChild(id: number) {
    children.splice(id, 1);
    children = children;
  }

  let newName: string;
  let newTally: number;
  function createChild() {
    children.push({ name: newName, tally: newTally });
    children = children;
  }
</script>

<div class="flex justify-center py-24">
  <div class="w-[600px] flex flex-col gap-4">
    <h1 class="text-3xl">Day 1</h1>
    <div class="flex items-center justify-between">
      <div class="text-xl">List of the childrens</div>
      <Dialog.Root>
        <Dialog.Trigger class={buttonVariants()}>New Children</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header class="gap-4">
            <Dialog.Title>New children</Dialog.Title>
            <div class="flex flex-col gap-4">
              <Label>Name</Label>
              <Input
                name="name"
                type="text"
                placeholder="Mario Rossi"
                bind:value={newName}
              />
              <Label>Tally</Label>
              <Input
                name="tally"
                type="number"
                placeholder="should be a number from -100 to 100"
                bind:value={newTally}
              />
              <div class="flex items-center justify-end">
                <Button on:click={() => createChild()}>Create</Button>
              </div>
            </div>
          </Dialog.Header>
        </Dialog.Content>
      </Dialog.Root>
    </div>
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Tally</Table.Head>
          <Table.Head></Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each children as child, id}
          <Table.Row>
            <Table.Cell>{child.name}</Table.Cell>
            <Table.Cell>{child.tally}</Table.Cell>
            <Table.Cell class="flex justify-end">
              <Button variant="destructive" on:click={() => deleteChild(id)}
                >Delete</Button
              >
            </Table.Cell>
          </Table.Row>
        {/each}
      </Table.Body>
    </Table.Root>
  </div>
</div>
