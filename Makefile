install:
	$(MAKE) -C backend install
	$(MAKE) -C frontend install

start:
	$(MAKE) -C backend start
	$(MAKE) -C frontend start

.PHONY: install start
