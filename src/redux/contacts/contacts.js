import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6266c0c2786383364216a3c6.mockapi.io/api/v1/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: [{ type: 'Contacts' }],
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: [{ type: 'Contacts' }],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Contacts' }],
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;
export const { useCreateContactMutation } = contactsApi;
export const { useDeleteContactMutation } = contactsApi;
