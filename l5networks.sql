--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Debian 14.6-1.pgdg110+1)
-- Dumped by pg_dump version 14.6 (Debian 14.6-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: calculate; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.calculate (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    calc character varying NOT NULL,
    "accountId" character varying,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    answer numeric(10,2) DEFAULT '0'::numeric NOT NULL
);


ALTER TABLE public.calculate OWNER TO postgres;

--
-- Data for Name: calculate; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.calculate (id, calc, "accountId", created_at, answer) FROM stdin;
39d3bac1-b51b-485d-8db7-54c7f31eefb5	3+3	\N	2023-04-10 04:42:04.838106	0.00
024909f8-4851-414e-b959-1280472ae29b	(3+3)*2	\N	2023-04-10 15:13:37.479202	0.00
60cebd23-5a77-45c2-b4d3-6690217328b2	23-8	\N	2023-04-10 15:17:33.312519	0.00
7f341f81-6f9d-4424-bea0-e8e23b807daa	(8+2)*2	\N	2023-04-10 15:18:02.231665	0.00
51e9ca6b-6ffb-4a49-ab43-9636f8bfc092	89*3	\N	2023-04-10 17:12:27.632747	0.00
943572d3-5942-45f2-8465-a1ab7e193d6f	5+8	\N	2023-04-10 18:02:37.410352	0.00
9010a69b-9ca5-4730-af53-7e63ee73b761	89*5	\N	2023-04-10 18:04:50.809474	0.00
357c63e4-00d6-4649-b822-84061a3480ba	7*9	\N	2023-04-10 18:10:33.378882	0.00
614826a5-f1c5-4b57-9af5-110372e79fb5	8-4	\N	2023-04-10 18:45:27.664075	0.00
fc72bcfd-e929-468d-8cc0-b63050224a5e	9-5	\N	2023-04-10 18:47:10.492169	0.00
1cf9b13d-2e0c-4ada-b2ea-4bda40b8885f	8/2	\N	2023-04-10 18:50:53.327698	0.00
80427bff-b367-4cf9-8df9-43b4ec8ac62a	5*8	\N	2023-04-10 19:46:39.663668	0.00
dcf0078b-2fc8-468f-a3f6-efbce6e1736d	5*8	\N	2023-04-10 20:24:44.322679	0.00
245d050e-eff1-4613-83f2-b37ab566144a	40/5	\N	2023-04-10 20:24:49.829919	0.00
30add11e-0568-46ae-bc28-b44afd5160e6	7*9	\N	2023-04-10 20:27:26.41644	0.00
2a3f8d91-500b-468a-a5ba-a80376ccde1e	7.5*2	\N	2023-04-10 20:37:38.050088	0.00
631036d3-4f4a-49d8-8571-94912584ebc4	7.5*974	\N	2023-04-10 20:41:29.917571	0.00
18b1c8ed-3fc1-4690-8cfc-607b818ef288	1.8965*875	\N	2023-04-10 20:54:11.771391	1659.44
2854b6f5-b1d2-423b-85dd-a16babf4b573	3/2	\N	2023-04-10 20:54:20.608814	1.50
531e3469-757c-4249-891f-af53a0d1e161	4*8	\N	2023-04-10 20:54:41.783681	32.00
\.


--
-- Name: calculate PK_ae67cc7edd3965f4c77076f9380; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calculate
    ADD CONSTRAINT "PK_ae67cc7edd3965f4c77076f9380" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

