<script lang="ts">
  import { dataset } from "./lib/dataset"
  import Select from "svelte-select"
  import { sort } from 'fuzzyjs'

  let search: string
  let tag: string

  const tags = Array.from(new Set(dataset.map(it => it.tags).flat()))

  $: sortedDataset = (search ? dataset.sort(sort(search, { iterator: (item) => item.name })) : dataset)
  $: tagSortedDataset = tag ? sortedDataset.filter(it => it.tags.includes((tag as any).value)) : sortedDataset

  $: console.log(tagSortedDataset)

</script>
<div class="w-full p-8 text-white bg-black">
  <h1 class="text-xl">Virginia is for Lovers</h1>
</div>
<div class="flex flex-col">
  <div class="m-8">
    <div class="flex flex-row">
      <input type="text" bind:value={search} placeholder="Search" class="border-b mr-4 border-gray-200">
      <Select bind:value={tag} items={tags}></Select>
    </div>
    <div class="mb-4"></div>
    {#each tagSortedDataset as data}
      <div class="flex flex-row mb-4">
        <img class="flex-shrink mr-4 rounded-lg w-[12%]" src={data.image} alt="Location">
        <div>
          <h1 class="text-xl">{data.name}</h1>
          {#if data.address}
            <p>Address: {data.address}</p>
          {/if}
          {#if data.url}
            <p>Website: <a href={data.url} class="transition-all text-blue-400 underline hover:text-blue-600">{data.url}</a></p>
          {/if}
          {#if data.tags.length !== 0}
            <p>Tags: {data.tags.join(", ")}</p>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>