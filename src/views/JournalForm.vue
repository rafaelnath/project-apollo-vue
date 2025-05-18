<script setup lang="ts">
import { computed, h, ref, shallowRef } from 'vue';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { ColumnDef } from '@tanstack/vue-table';
import { useVueTable, getCoreRowModel, FlexRender } from '@tanstack/vue-table';

type JournalTrx = {
    coa: string,
    debit: number,
    credit: number
}

const coa = ref('');
const debit = ref(0);
const credit = ref(0);
// const journalTrxList = shallowRef<JournalTrx[]>([{ coa: 'test', debit: 1000, credit: 0 }]);
const journalTrxList = shallowRef<JournalTrx[]>([]);

const disableDebit = computed(() => credit.value != 0);
const disableCredit = computed(() => debit.value != 0);

const columns: ColumnDef<JournalTrx>[] = [
    {
        accessorKey: 'coa',
        header: 'COA'
    },
    {
        accessorKey: 'debit',
        header: 'Debit',
    },
    {
        accessorKey: 'credit',
        header: 'Credit',
    },
]

const table = useVueTable({
    data: computed(() => journalTrxList.value),
    columns,
    getCoreRowModel: getCoreRowModel()
})

const addTrx = () => {
    if (coa.value.trim() == '' || debit.value - credit.value == 0) {
        window.alert("Please fill all required fields");
        return
    }
    if (journalTrxList.value.length) {
        journalTrxList.value = [
            ...journalTrxList.value,
            {
                coa: coa.value,
                debit: debit.value,
                credit: credit.value
            }
        ]
    } else {
        journalTrxList.value = [{
            coa: coa.value,
            debit: debit.value,
            credit: credit.value
        }]
    }
    // this getRowModel().rows is updated, but somehow shadcn table not rerendered the updates.
    // console.log(table.getRowModel().rows[0].getVisibleCells())
}
</script>
<template>
    <p>{{ journalTrxList }}</p>
    <div class="p-4 rounded-md bg-white shadow-md flex gap-6 items-center">
        <div class="input-group">
            <label for="coa">COA</label>
            <input type="text" id="coa" v-model="coa">
        </div>
        <div class="input-group">
            <label for="debit">Debit</label>
            <input type="number" id="debit" v-model="debit" :disabled="disableDebit">
        </div>
        <div class="input-group">
            <label for="credit">Credit</label>
            <input type="number" id="credit" v-model="credit" :disabled="disableCredit">
        </div>
        <Button @click="addTrx">Submit</Button>
    </div>
    <Table>
        <TableHeader>
            <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                <TableHead v-for="header in headerGroup.headers" :key="header.id">
                    <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header"
                        :props="header.getContext()" />
                </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <template v-if="table.getRowModel().rows?.length">
                <TableRow v-for="row in table.getRowModel().rows" :key="row.id"
                    :data-state="row.getIsSelected() ? 'selected' : undefined">
                    <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                        <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                    </TableCell>
                </TableRow>
            </template>
            <template v-else>
                <TableRow>
                    <TableCell :colspan="columns.length" class="h-24 text-center">
                        No results.
                    </TableCell>
                </TableRow>
            </template>
        </TableBody>
    </Table>
    <!-- <table>
        <thead>
            <tr>
                <th>COA</th>
                <th>Debit</th>
                <th>Credit</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="journalTrxList.length == 0">
                <td colspan="3">No Data</td>
            </tr>
            <tr v-for="(trx, index) in journalTrxList" :key="index" v-else>
                <td>{{ trx.coa }}</td>
                <td>{{ trx.debit }}</td>
                <td>{{ trx.credit }}</td>
            </tr>
        </tbody>
    </table> -->
</template>
<style scoped>
@reference 'tailwindcss';

input {
    @apply border
}

input[type=number] {
    @apply text-right
}

.input-group {
    @apply flex flex-col gap-0.5
}
</style>